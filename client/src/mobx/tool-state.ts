import { makeAutoObservable } from "mobx";
import { Tool } from "../models/tool";

class ToolState {
  tool: Tool | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool: Tool) {
    this.tool = tool;
  }

  setLineWidth(number: number) {
    if (this.tool) {
      this.tool.lineWidth = number;
    }
  }

  setColor(color: string) {
    if (this.tool) {
      this.tool.color = color;
    }
  }
}

export default new ToolState();
