import { ActivePeriodEnum } from "@/core/entity/reptile/enum/active-period.enum";
import { MaintenanceLevelEnum } from "@/core/entity/reptile/enum/maintenance-level.enum";
import { ReproductionTypeEnum } from "@/core/entity/reptile/enum/reproduction-type.enum";

export class CreateReptileDto {
    dietId: string;
    name: string;
    activeAt: ActivePeriodEnum;
    lineage: string;
    class: string;
    formOfReproduction: ReproductionTypeEnum;
    size: string;
    lifespan: number;
    maintenanceLevel: MaintenanceLevelEnum;
}