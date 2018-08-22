//* デバッグ関数 *//
function debugFunc(){
  Logger.log("hello");
}

//* POSTを受けた際の処理 *//
function doPost(e) {
  Logger.log(e);
  var parameter = e.parameter;
  var response = {};
  var output = ContentService.createTextOutput().setMimeType(ContentService.MimeType.JSON).setContent(JSON.stringify(response));
  return output;
}