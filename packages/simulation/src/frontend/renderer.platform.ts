// The platform code of renderer.vibe: the recording output stream and standard error (EK4402).
import { Writable } from "node:stream"

/** A live renderer sink that forwards to the recording, so finishing the recording leaves the sink open. */
export function recordingOutput(recording: Writable) {
  return new Writable({
    write(chunk, encoding, callback) {
      recording.write(chunk, encoding, callback)
    },
  }) as unknown as NodeJS.WriteStream
}

export function writeError(text: string) {
  return process.stderr.write(text)
}
