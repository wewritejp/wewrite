import { vi } from "vitest";

export const mockCtx: any = {
  session: {
    $create: vi.fn(),
  },
}
