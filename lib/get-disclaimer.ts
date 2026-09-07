import type { DisclaimerDocument } from "./prismic-types";
import sample from "@/content/sample-disclaimer.json";

/**
 * Teaching stand-in for:
 *   const client = createClient();
 *   return client.getSingle("disclaimer");
 *
 * No network, no tokens — safe for Codementor demos.
 */
export async function getDisclaimer(): Promise<DisclaimerDocument> {
  return sample as DisclaimerDocument;
}
