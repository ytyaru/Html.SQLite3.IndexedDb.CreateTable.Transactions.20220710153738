class MonaTransactionDb {
    constructor(address) {
        this.create(address)
    }
    create(address) { // address:自分のアドレス
        this.dexie = new Dexie(`${address}`); // 自分のアドレスひとつごとにDBを作成する。テーブル結合不要になる。
        this.dexie.version(1).stores({
            last: `++id`,
            sendPartners: `address`,
            receivePartners: `address`,
            transactions:  `txid`,
        });
    }
    async addMyAddress(address) {
        this.dexie.addresses.put({address:address})
    }
}
