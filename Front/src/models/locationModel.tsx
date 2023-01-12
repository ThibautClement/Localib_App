import { Locataire } from "./locataireModel"
import { Vehicule } from "./vehiculeModel"

export type Location = {
    id : number
    vehicule : Vehicule
    locataire : Locataire
}