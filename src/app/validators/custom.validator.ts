import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

export class ValidatorsCustom {
    static isValidDNA(fc: AbstractControl): ValidationErrors | null {
        const REGEXP = /^[acgtACGT/ ]*$/;
        return !fc.value ? null : REGEXP.test(fc.value) ? null : ({ isValidDNA: true });
    }

    static isValidDNAStructure(fc: AbstractControl): ValidationErrors | null {
        const dnaList = fc.value.split(" ");
        const countChains = dnaList.length;
        let isNxN = true;
        dnaList.forEach(chain => {
            if (chain.length !== countChains) {
                isNxN = false;
                return;
            }
        });
        return !fc.value ? null : isNxN ? null : ({ isValidDNAStructure: true });
    }
}
