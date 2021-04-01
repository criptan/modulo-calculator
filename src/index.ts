import BigNumber from "bignumber.js";
import { prompt } from "inquirer";
import chalk from "chalk";

const run = async (): Promise<void> => {
  const { hash, divisor } = await prompt([
    {
      name: "hash",
      type: "input",
      message: "Hash",
    },
    {
      name: "divisor",
      type: "number",
      message: "Divisor",
    },
  ]);

  console.log(
    `The modulo of the operation is ${chalk.green(
      new BigNumber(hash, 16).modulo(divisor).toString()
    )}`
  );

  await prompt([
    {
      name: "void",
      type: "input",
      message: `Press ${chalk.green("Enter")} to finish`,
    },
  ]);
};

run().catch((error) => console.error(error));
