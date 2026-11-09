import type { DatabaseMigration } from "./migration.js"
import m00 from "./migration/20260127222353_familiar_lady_ursula.vibe"
import m01 from "./migration/20260211171708_add_project_commands.vibe"
import m02 from "./migration/20260213144116_wakeful_the_professor.vibe"
import m03 from "./migration/20260225215848_workspace.vibe"
import m04 from "./migration/20260227213759_add_session_workspace_id.vibe"
import m05 from "./migration/20260228203230_blue_harpoon.vibe"
import m06 from "./migration/20260303231226_add_workspace_fields.vibe"
import m07 from "./migration/20260309230000_move_org_to_state.vibe"
import m08 from "./migration/20260312043431_session_message_cursor.vibe"
import m09 from "./migration/20260323234822_events.vibe"
import m10 from "./migration/20260410174513_workspace-name.vibe"
import m11 from "./migration/20260413175956_chief_energizer.vibe"
import m12 from "./migration/20260423070820_add_icon_url_override.vibe"
import m13 from "./migration/20260427172553_slow_nightmare.vibe"
import m14 from "./migration/20260428004200_add_session_path.vibe"
import m15 from "./migration/20260501142318_next_venus.vibe"
import m16 from "./migration/20260504145000_add_sync_owner.vibe"
import m17 from "./migration/20260507164347_add_workspace_time.vibe"
import m18 from "./migration/20260510033149_session_usage.vibe"
import m19 from "./migration/20260511000411_data_migration_state.vibe"
import m20 from "./migration/20260511173437_session-metadata.vibe"
import m21 from "./migration/20260601010001_normalize_storage_paths.vibe"
import m22 from "./migration/20260601202201_amazing_prowler.vibe"
import m23 from "./migration/20260602002951_lowly_union_jack.vibe"
import m24 from "./migration/20260602182828_add_project_directories.vibe"
import m25 from "./migration/20260603001617_session_message_projection_indexes.vibe"
import m26 from "./migration/20260603040000_session_message_projection_order.vibe"
import m27 from "./migration/20260603141458_session_input_inbox.vibe"
import m28 from "./migration/20260603160727_jittery_ezekiel_stane.vibe"
import m29 from "./migration/20260604172448_event_sourced_session_input.vibe"
import m30 from "./migration/20260605003541_add_session_context_snapshot.vibe"
import m31 from "./migration/20260605042240_add_context_epoch_agent.vibe"
import m32 from "./migration/20260611035744_credential.vibe"
import m33 from "./migration/20260611192811_lush_chimera.vibe"
import m34 from "./migration/20260612174303_project_dir_strategy.vibe"
import m35 from "./migration/20260622142730_simplify_session_context_epoch.vibe"
import m36 from "./migration/20260622170816_reset_v2_session_state.vibe"
import m37 from "./migration/20260622202450_simplify_session_input.vibe"
import m38 from "./migration/20260804233008_loose_psylocke.vibe"
import m39 from "./migration/20260805200742_import_legacy_credentials.vibe"
import m40 from "./migration/20260808023530_workspace_domain.vibe"
import m41 from "./migration/20260811161259_execution_claim_attempts.vibe"
import m42 from "./migration/20260812181746_session_inbox.vibe"
import m43 from "./migration/20260812213948_worktree.vibe"
import m44 from "./migration/20260819222447_session_viewed_state.vibe"
import m45 from "./migration/20260823191254_nullable_workspace_binding.vibe"
import m46 from "./migration/20260910120000_clear_v1_session_permission.vibe"
import m47 from "./migration/20260923013825_project_time_active.vibe"
import m48 from "./migration/20261007190000_azure_cli_external_credential.vibe"
import m49 from "./migration/20261010180456_project_time_archived.vibe"
import m50 from "./migration/20261024002554_session_allowance.vibe"
import m51 from "./migration/20261024175301_drop_session_allowance.vibe"
import m52 from "./migration/20261025123711_blob.vibe"
import m53 from "./migration/20261025154125_drop_session_pending.vibe"

export const migrations = [
  m00,
  m01,
  m02,
  m03,
  m04,
  m05,
  m06,
  m07,
  m08,
  m09,
  m10,
  m11,
  m12,
  m13,
  m14,
  m15,
  m16,
  m17,
  m18,
  m19,
  m20,
  m21,
  m22,
  m23,
  m24,
  m25,
  m26,
  m27,
  m28,
  m29,
  m30,
  m31,
  m32,
  m33,
  m34,
  m35,
  m36,
  m37,
  m38,
  m39,
  m40,
  m41,
  m42,
  m43,
  m44,
  m45,
  m46,
  m47,
  m48,
  m49,
  m50,
  m51,
  m52,
  m53,
] satisfies DatabaseMigration.Migration[]
