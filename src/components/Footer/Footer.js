import {
    FooterSection,
    FooterContainer,
    FooterNewsletter,
    FooterNewsletterTitle,
    FooterNewsletterText,
    FooterNewsletterForm,
    FooterNewsletterInput,
    FooterBtn,
    FooterLinkContainer,
    FooterLinksWrapper,
    FooterLinks,
    FooterLinkTitle,
    FooterLink,
    FooterCopyRight,
    FooterLabel
} from './FooterElements';
function Footer() {
    return (
        <div>
            <FooterSection>
                <FooterContainer>
                    <FooterNewsletter>
                        <FooterNewsletterTitle>Join our listing for execlusive discounts and new recipes</FooterNewsletterTitle>
                        <FooterNewsletterText>We create new recipes every week and cooking tips</FooterNewsletterText>
                        <FooterNewsletterForm>
                            <FooterLabel htmlFor="email">Email address</FooterLabel>
                           <FooterNewsletterInput name="email" id="email" type="email" placeholder="Email address" />
                           <FooterBtn>Submit</FooterBtn>
                        </FooterNewsletterForm>
                    </FooterNewsletter>
                    <FooterLinkContainer>
                        <FooterLinksWrapper>
                            <FooterLinks>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/'>History</FooterLink>
                                <FooterLink to='/'>Mission/Vision</FooterLink>
                            </FooterLinks>
                            <FooterLinks>
                                <FooterLinkTitle>Services</FooterLinkTitle>
                                <FooterLink to='/about'>How it works</FooterLink>
                                <FooterLink to='/'>Perfume prep kit</FooterLink>                                
                            </FooterLinks>

                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinks>
                                <FooterLinkTitle>Resources</FooterLinkTitle>                                
                                <FooterLink to='/'>FAQ &amp; Support</FooterLink>
                                <FooterLink to='/'>Affiliate Program</FooterLink>
                            </FooterLinks>
                            <FooterLinks>
                                <FooterLinkTitle>Contact</FooterLinkTitle>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>Facebook</FooterLink>                                
                            </FooterLinks>

                        </FooterLinksWrapper>
                    </FooterLinkContainer>
                    <FooterCopyRight to='https://github.com/ikzath/react-perfume-list'> &copy; Copyright 2021, Designed and coded with 💛 by Ikzath Kalanthar</FooterCopyRight>
                </FooterContainer>
            </FooterSection>

        </div>
    )
}

export default Footer;
