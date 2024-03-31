import { Athena } from "@aws-sdk/client-athena";
import AthenaQuery from "@classmethod/athena-query";

const athena = new Athena({});
const athenaQuery = new AthenaQuery(athena);

main()

async function main() {
  for await (const item of athenaQuery.query("SELECT * FROM waf_logs;")) {
    console.log(item); // You can get all items across pagination.
  }
}
