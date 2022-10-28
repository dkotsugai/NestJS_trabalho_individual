import { PartialType } from "@nestjs/mapped-types";
import { CreateRegisterDTO } from "./createRegister.dto";

export class UpdateUserDTO extends PartialType(CreateRegisterDTO) {}