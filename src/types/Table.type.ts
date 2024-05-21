export interface TableType {
  id: string,
  name: string,
  tableNumber?: string,
  tableCount?: number,
  entranceTime: string,
  phoneNumber: string,
  headCount: string,
  entranceStatus: "PENDING" | "WAITING" | "COMPLETE"
}