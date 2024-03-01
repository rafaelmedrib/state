import { constantCase } from "change-case-all"

export default class BaseService {
  pickState() {
    const self = this.constructor as unknown as { states: Record<string, any> };

    const configured_state = process.env[`CONFIG_${constantCase(this.constructor.name)}`]

    if (!configured_state) {
      throw new Error(`No state configured for ${this.constructor.name}`)
    }

    return self.states[configured_state];
  }
}
