import { Schema } from "effect";
import { Rpc, RpcGroup } from "effect/rpc";
export declare const MenuRunAction: Rpc.Rpc<"MenuRunAction", Schema.Struct<{
    action: Schema.Literals<readonly ["app.installCli", "app.relaunch", "edit.undo", "edit.redo", "edit.cut", "edit.copy", "edit.paste", "edit.delete", "edit.selectAll", "view.reload", "view.toggleDevTools", "view.resetZoom", "view.zoomIn", "view.zoomOut", "view.toggleFullscreen", "window.new", "window.close", "window.minimize", "window.toggleMaximize"]>;
}>, Schema.Void, Schema.Never, never, never>;
export declare const MenuRpcs: RpcGroup.RpcGroup<Rpc.Rpc<"MenuRunAction", Schema.Struct<{
    action: Schema.Literals<readonly ["app.installCli", "app.relaunch", "edit.undo", "edit.redo", "edit.cut", "edit.copy", "edit.paste", "edit.delete", "edit.selectAll", "view.reload", "view.toggleDevTools", "view.resetZoom", "view.zoomIn", "view.zoomOut", "view.toggleFullscreen", "window.new", "window.close", "window.minimize", "window.toggleMaximize"]>;
}>, Schema.Void, Schema.Never, never, never>>;
