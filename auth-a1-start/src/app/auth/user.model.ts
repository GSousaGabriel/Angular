export class User {
    constructor(
        public email: string,
        private _id: string,
        private _expiresIn: Date
    ) { }

    get id() {
        if (this._expiresIn || new Date() > this._expiresIn) {
            return null
        }
        return this._id
    }
}