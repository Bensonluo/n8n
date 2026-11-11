import { findGraphReasons } from './graph-rules';
import { findSettingsReasons } from './settings-rules';
import { findTriggerIdentityReasons } from './trigger-identity-rule';
import type { EngineV2Eligibility, EngineV2EligibilityWorkflow } from './types';

/**
 * Reports whether engine v2 can run the workflow, and every reason it cannot.
 *
 * An approximation: a workflow it reports as eligible can still fail at run time.
 * Each rule must never refuse a workflow that engine v2 runs.
 */
export function checkEngineV2Eligibility(
	workflow: EngineV2EligibilityWorkflow,
): EngineV2Eligibility {
	const reasons = [
		...findSettingsReasons(workflow.settings ?? {}),
		...findTriggerIdentityReasons(workflow.nodes),
		...findGraphReasons(workflow.nodes, workflow.connections),
	];
	return { eligible: reasons.every((reason) => reason.severity !== 'blocking'), reasons };
}
