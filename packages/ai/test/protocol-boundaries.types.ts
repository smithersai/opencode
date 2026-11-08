import { LLMEvent, Media, ProviderID } from "../src/effect.js"
import { CompactionPart } from "../src/schema/messages.vibe"
import { MediaEvent, ProviderErrorEvent, RawEvent, StepStart } from "../src/schema/events.vibe"

const options = { disableChecks: true }

const step: ReturnType<typeof StepStart.make> = LLMEvent.stepStart({ index: 1 }, options)
const media: ReturnType<typeof MediaEvent.make> = LLMEvent.media({ media: Media.bytes(new Uint8Array()) }, options)
const error: ReturnType<typeof ProviderErrorEvent.make> = LLMEvent.providerError({ message: "failed" }, options)
const raw: ReturnType<typeof RawEvent.make> = LLMEvent.raw({ data: {} }, options)
const checkpoint: ReturnType<typeof CompactionPart.make> = LLMEvent.compaction({
  provider: ProviderID.make("test"),
  encrypted: "checkpoint",
})

void [step, media, error, raw, checkpoint]
