
import { Establishment } from "../models/establishment.model";

export class EstablishmentService {
    constructor() {

    }
    private establishments: Establishment[] = [
        new Establishment('Açougue Central', 'Rua Girassol, 384 - Vila Madalena', '03178-200', 'A', 'https://www.thefork.com.br/restaurante/acougue-central-casa-de-carnes/287613?cc=18174-54f', -23.555377000, -46.689132000, 1130958800, 3.9, 3.5, 4.5, 55, 'Grelha, forno e panela são os pilares da cozinha do Açougue Central. A casa de carnes localizada no coração da Vila Madalena prioriza cortes menos conhecidos e trabalha apenas com as raças bovinas Wagyu e Angus, proporcionando uma experiência única. O argentino Alejandro Peyrou é o chef executivo da casa.', 'acouguecentral.jpg'),
        new Establishment('Bar Astor', 'Rua Delfina, 163 - Vila Madalena', '05443- 010', 'b', 'www.barastor.com.br', -23.553993000, -46.694210000, 1138151364, 4.4, 4.5, null, 2, 'A Vila Madalena faz lembrar bar e boemia.Palavras vizinhas, conceitos complementares.Um não vive sem o outro, em qualquer bom lugar do mundo, a qualquer tempo.O passeio vale pelo ambiente de boteco chique, garçons à moda antiga, pelo chopp bem tirado, pelos cocktails perfeitos e por pratos da cozinha boêmia que dão água na boca.', 'bardoastor.jpg')
    ]

    getEstablishments(){
        return this.establishments.slice();
    }

}