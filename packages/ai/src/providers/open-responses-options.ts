import type { Options } from "../protocols/utils/open-responses-options.vibe"

export type OpenResponsesOptionsInput = Options & { readonly [key: string]: unknown }
export type OpenResponsesProviderOptionsInput = OpenResponsesOptionsInput
