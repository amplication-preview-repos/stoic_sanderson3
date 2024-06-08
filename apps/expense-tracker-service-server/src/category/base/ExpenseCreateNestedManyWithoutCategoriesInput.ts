/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ExpenseWhereUniqueInput } from "../../expense/base/ExpenseWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ExpenseCreateNestedManyWithoutCategoriesInput {
  @Field(() => [ExpenseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExpenseWhereUniqueInput],
  })
  connect?: Array<ExpenseWhereUniqueInput>;
}

export { ExpenseCreateNestedManyWithoutCategoriesInput as ExpenseCreateNestedManyWithoutCategoriesInput };