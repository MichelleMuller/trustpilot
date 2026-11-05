/**
 * Receives review submissions from review-collector.html
 * and appends them to the first sheet of the spreadsheet below.
 *
 * Setup:
 *   1. Open the Google Sheet
 *   2. Extensions > Apps Script
 *   3. Delete everything in the editor, paste ALL of this file
 *   4. Deploy > New deployment > Web app
 *        Execute as:    Me
 *        Who has access: Anyone
 *   5. Authorise when prompted
 *   6. Copy the Web app URL (ends /exec) into FORM_ENDPOINT
 *      at the top of the script block in review-collector.html
 */

var SHEET_ID = '1-Lir9BpgClicd_HnWKKIeXervKQfPHiA8EHaebAg-lA';

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
    var d = JSON.parse(e.postData.contents);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Received', 'Subject', 'Variant', 'Variant source', 'Rating',
        'Attributes', 'Comment', 'Verified', 'Input modes'
      ]);
    }

    var attrs = [];
    var list = d.attributes || [];
    for (var i = 0; i < list.length; i++) {
      var a = list[i];
      if (a.type === 'multi') {
        attrs.push(a.key + ': ' + (a.values || []).join(', '));
      } else {
        attrs.push(a.key + ': ' + (a.label || ''));
      }
    }

    sheet.appendRow([
      new Date(),
      d.subject ? d.subject.name : '',
      d.variant ? (d.variant.value || '') : '',
      d.variant ? (d.variant.source || '') : '',
      d.rating ? d.rating.value : '',
      attrs.join('\n'),
      d.comment || '',
      d.provenance ? d.provenance.verified_purchase : '',
      d.provenance ? (d.provenance.input_modes || []).join(', ') : ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Optional: run this once from the editor to check the sheet
 * connection works before deploying. It adds a test row.
 */
function testConnection() {
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  sheet.appendRow([new Date(), 'TEST ROW — delete me']);
  Logger.log('Wrote a test row to: ' + sheet.getName());
}
