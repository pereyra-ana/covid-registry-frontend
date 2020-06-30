export class ValidatorMessage {

    getError(error: { type: string; props: any } | null): string {
        const messages = {
            isValidDNA: { text: `Los caracteres permitidos son A,T,C,G` },
            isValidDNAStructure: { text: `El largo de las cadenas, separadas por espacio, debe ser igual a la cantidad de cadenas` },
            required: { text: `Campo requerido` },
        };
        return messages[error.type] ? messages[error.type].text : 'Campo inválido';
    }
}
