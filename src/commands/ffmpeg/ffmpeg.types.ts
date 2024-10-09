import { ICommandExact } from "../../core/executor/command.types";

export interface IFfmpegInput {
  width: number;
  height: number;
  path: string;
  name: string;
}

export interface ICommandExecFfmpeg extends ICommandExact {
  output: string;
}
