import { ChildProcessWithoutNullStreams } from "child_process";
import { IStreamLogger } from "../handlers/stream-logger.interface";
import { ICommandExact } from "./command.types";

export abstract class CommandExecutor<Input> {
  constructor(private logger: IStreamLogger) {}

  public async execute() {
    const input = await this.prompt();
    const command = this.build(input);
    const stream = this.spawn(command);
    this.processStream(stream, this.logger);
  }

  protected abstract prompt(): Promise<Input>;
  protected abstract build(input: Input): ICommandExact;
  protected abstract spawn(
    command: ICommandExact
  ): ChildProcessWithoutNullStreams;
  protected abstract processStream(
    stream: ChildProcessWithoutNullStreams,
    logger: IStreamLogger
  ): void;
}
