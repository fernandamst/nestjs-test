
export class ReptileEntity  {
    id: number;
    dietId: string; //carnivore, herbivore, omnivore
    name: string;
    activeAt:string; //nocturnal, diurnal
    lineage:string; //squamata, testudines, crocodilia, sphenodontia
    class: string; //Anapsida, Parapsida, Diapsida
    formOfReproduction: string; //viviparous, ovoviviparous, ectotherm
    size: string;
    lifespan:number;
    maintenanceLevel: string; //high, low, medium

    constructor(){}
}