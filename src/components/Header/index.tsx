import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import Logo from "../../assets/logo.svg"
import * as Dialog from '@radix-ui/react-dialog';
import { NewTrasactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={Logo} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                  <NewTrasactionModal/>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}