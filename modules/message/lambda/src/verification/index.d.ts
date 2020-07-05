/**
 * Verification context
 */
export declare type VerificationContext = "register" | "reset" | "invite";
/**
 * Verification code
 */
export interface VerificationCode {
    id: string;
    context: VerificationContext;
    subject: string;
    expires: number;
}
