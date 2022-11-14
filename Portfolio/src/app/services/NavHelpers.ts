export const SetEverythingOffExcept = (activateNavLink:string, document: Document) :void => {
    const navLinkIds: string[] = [
      "hero-nav-id",
      "about-nav-id",
      "skills-nav-id",
      "resume-nav-id",
      "portfolio-nav-id",
      "contact-nav-id"
    ]

  navLinkIds.forEach((aLink) => {
    if(aLink !== activateNavLink) {
      document.getElementById(aLink).className = 'nav-link scrollto'
    }else{
      document.getElementById(aLink).className = 'nav-link scrollto active'
    }
  })
}
