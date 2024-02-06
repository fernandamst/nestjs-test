import { CreateReptileDto } from "@/application/dto/reptile/request/create/create.dto";
import { ActivePeriodEnum } from "@/core/entity/reptile/enum/active-period.enum";
import { MaintenanceLevelEnum } from "@/core/entity/reptile/enum/maintenance-level.enum";
import { ReproductionTypeEnum } from "@/core/entity/reptile/enum/reproduction-type.enum";
import { Reptile } from "@prisma/client";

export class ReptileMock {
    public static dietId(): string {
        return '66300ed5-1745-45df-b9a6-b39cade7fc8e'
    }

    public static createRequestBody(): CreateReptileDto {
        return {
            dietId: '66300ed5-1745-45df-b9a6-b39cade7fc8e',
            name: 'Testus Reptilus',
            activeAt: ActivePeriodEnum['NIGHT'],
            lineage: 'sphenodontia',
            class: 'Diapsida',
            formOfReproduction: ReproductionTypeEnum['VIVIPAROUS'],
            size: 'small',
            lifespan: 12,
            maintenanceLevel: MaintenanceLevelEnum['HIGH'],
        }
    }

    public static reptilePrismaInput() {
        return {
            name: 'Testus Reptilus',
            activeAt: ActivePeriodEnum['NIGHT'],
            formOfReproduction: ReproductionTypeEnum['VIVIPAROUS'],
            size: 'small',
            lifespan: 12,
            maintenanceLevel: MaintenanceLevelEnum['HIGH'],
        }
    }

    public static reptile(): Reptile {
        return {
            id: '66300ed5-1745-45df-b9a6-b39cade7fc8e',
            dietId: '66300ed5-1745-45df-b9a6-b39cade7fc8e',
            name: 'Testus Reptilus',
            activeAt: ActivePeriodEnum['NIGHT'],
            formOfReproduction: ReproductionTypeEnum['VIVIPAROUS'],
            size: 'small',
            lifespan: 12,
            maintenanceLevel: MaintenanceLevelEnum['HIGH'],
            createdAt: new Date('66300ed5-1745-45df-b9a6-b39cade7fc8e'),
            updatedAt: new Date('66300ed5-1745-45df-b9a6-b39cade7fc8e')
        }
    }
}