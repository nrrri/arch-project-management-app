declare module "./aws-exports" {
  const config: {
    aws_project_region: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  export default config;
}
