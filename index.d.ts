declare module 'complete-string' {
    namespace CompleteString {
        export const withZero: (str: string, len: number) => string;
        export const withChar: (str: string, len: number, pad: string) => string;
    }
    export = CompleteString;
}
