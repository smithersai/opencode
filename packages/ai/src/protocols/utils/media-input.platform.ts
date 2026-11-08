// The platform code of media-input.vibe: multipart bodies and blobs, host globals a .vibe file does not read (EK4402).

/** @throws {never} */
export function formData(): FormData {
  return new FormData()
}

/** @throws {never} */
export function isFormData(value: unknown): value is FormData {
  return value instanceof FormData
}

/** @throws {never} */
export function blob(parts: ReadonlyArray<ArrayBuffer>, mediaType: string): Blob {
  return new Blob([...parts], { type: mediaType })
}
