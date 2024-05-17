export interface TableType {
  id: string,
  name: string,
  tableNumber?: string,
  entranceTime: string,
  phoneNumber: string,
  headCount: string,
  entranceStatus: "PENDING" | "WAITING" | "COMPLETE"
}