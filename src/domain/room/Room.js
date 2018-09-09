// こういう感じの実装は一旦やらない
/* eslint-disable-next-line */
export class Room {
  constructor() {
  //  http://localhost:8090/room/find_all/0
  //  送信して変数へ格納する
    // イケてないけど、findAllの先頭をコンストラクタで取得。
    // 将来的には変える
  //   {
  //     "id": 0,
  //     "boardTitle": "ボードゲーム0",
  //     "placeName": "ボドゲショップ1",
  //     "player": 2,
  //     "remark": null
  //   }
    this.id = 0;
    this.boardTitle = 'ボードゲーム0';
    this.placeName = 'ボドゲショップ';
    this.player = 2;
    this.remark = '';
  }

  // get id() {
  //   return this.id;
  // }
  //
  // set id(id) {
  //   this.id = id;
  // }
  //
  // get boardTitle() {
  //   return this.boardTitle;
  // }
  //
  // set boardTitle(boardTitle) {
  //   this.boardTitle = boardTitle;
  // }
  //
  // get placeName() {
  //   return this.placeName;
  // }
  //
  // set placeName(placeName) {
  //   this.placeName = placeName;
  // }
  //
  // get player() {
  //   return this.player;
  // }
  //
  // set player(player) {
  //   this.player = player;
  // }
  //
  // get remark() {
  //   return this.remark;
  // }
  //
  // set remark(remark) {
  //   this.remark = remark;
  // }
}

