
export class Database<T> {
  private records: T[] = []

  addRecord(record: T): T {
    this.records.push(record)
    return record
  }
}
