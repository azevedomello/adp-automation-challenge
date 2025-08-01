import { logger } from "./factories/LoggerFactory";

export function loggerStep(description: string) {
    logger.info(`## STEP ## : ${description}`);
}
export function loggerSuccess(description: string) {
    logger.info(`## Success ## : ${description}`);
}
export function loggerFail(description: string) {
    logger.error(`## Fail ## : ${description}`);
}