import { DatabaseOperationsMessage } from "@/constants";
import { DatabaseError } from "./database-error";

export class NoEntityInsertedError extends DatabaseError {
  constructor() {
    super(DatabaseOperationsMessage.NO_DATA_INSERTED);
    this.name = "NoEntityInsertedError";
  }
}
