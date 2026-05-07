import process from "node:process";

const REQUIRED_UNLOCK = "I_UNDERSTAND_THIS_WILL_DEPLOY_TO_PRODUCTION";
const REQUIRED_TARGET = "pages-vayutrix";

const unlock = (process.env.VAYUTRIX_ALLOW_PROD_DEPLOY ?? "").trim();
const target = (process.env.VAYUTRIX_DEPLOY_TARGET ?? "").trim();

if (unlock !== REQUIRED_UNLOCK || target !== REQUIRED_TARGET) {
  console.error("");
  console.error("Blocked: production deploy is protected.");
  console.error("");
  console.error("To run it intentionally, set BOTH environment variables:");
  console.error(`  VAYUTRIX_ALLOW_PROD_DEPLOY=${REQUIRED_UNLOCK}`);
  console.error(`  VAYUTRIX_DEPLOY_TARGET=${REQUIRED_TARGET}`);
  console.error("");
  console.error("PowerShell example (current session):");
  console.error(
    `$env:VAYUTRIX_ALLOW_PROD_DEPLOY="${REQUIRED_UNLOCK}"; ` +
      `$env:VAYUTRIX_DEPLOY_TARGET="${REQUIRED_TARGET}"; ` +
      "npm run deploy:pages:production",
  );
  console.error("");
  process.exit(1);
}

