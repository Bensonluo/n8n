import type { IWorkflowBase } from 'n8n-workflow';

export type EngineV2EligibilityWorkflow = Pick<IWorkflowBase, 'nodes' | 'connections' | 'settings'>;

/** Stable identifiers. Consumers key messages and metrics on them, so never rename one. */
export type EngineV2ReasonCode =
	| 'ERROR_WORKFLOW'
	| 'REDACTION_POLICY'
	| 'END_USER_CREDENTIALS'
	| 'TRIGGER_EXTERNAL_IDENTITY'
	| 'CYCLE_WITHOUT_SPLIT_IN_BATCHES'
	| 'LOOP_ENTERED_MID_BODY'
	| 'LOOP_MULTIPLE_ENTRIES'
	| 'LOOP_MULTIPLE_RETURNS'
	| 'NESTED_LOOP'
	| 'LOOP_EXITS_MID_BODY'
	| 'INPUT_SLOT_CONVERGENCE'
	| 'NODE_REACHED_ONLY_THROUGH_DISABLED_NODE'
	| 'LOOP_DONE_OUTPUT_FEEDS_BODY'
	| 'LOOP_INPUT_NOT_FIRST'
	| 'LOOP_WITHOUT_RETURN';

export interface EngineV2Reason {
	code: EngineV2ReasonCode;
	severity: 'blocking' | 'warning';
	nodeId?: string;
	nodeName?: string;
	/** English fallback text. */
	message: string;
}

export interface EngineV2Eligibility {
	eligible: boolean;
	reasons: EngineV2Reason[];
}
