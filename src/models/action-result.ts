export interface NoDataActionResult {
  success: boolean;
  successMessage?: string;
  error?: string;
}

export interface ActionResult<T> extends NoDataActionResult {
  data: T | null;
}
