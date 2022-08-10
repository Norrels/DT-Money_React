import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SeachForm () {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transações" />

            <button type="submit">
                <MagnifyingGlass size={28}/>
                Buscar
            </button>
        </SearchFormContainer>
    )
}