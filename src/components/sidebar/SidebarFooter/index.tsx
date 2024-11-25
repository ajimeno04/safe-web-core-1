import type { ReactElement } from 'react'
import { useEffect } from 'react'

import {
  SidebarList,
  SidebarListItemButton,
  SidebarListItemIcon,
  SidebarListItemText,
} from '@/components/sidebar/SidebarList'
import { loadBeamer } from '@/services/beamer'
import { useAppSelector } from '@/store'
import { CookieAndTermType, hasConsentFor } from '@/store/cookiesAndTermsSlice'
import HelpCenterIcon from '@/public/images/sidebar/help-center.svg'
import { Link, ListItem, SvgIcon, Typography } from '@mui/material'
import DebugToggle from '../DebugToggle'
import { HELP_CENTER_URL, IS_PRODUCTION } from '@/config/constants'
import { useCurrentChain } from '@/hooks/useChains'
import darkPalette from '@/components/theme/darkPalette'
import ProtofireLogo from '@/public/images/protofire-logo.svg'
import SuggestionIcon from '@/public/images/sidebar/lightbulb_icon.svg'

export const NEW_SUGGESTION_FORM =
  'https://docs.google.com/forms/d/e/1FAIpQLSfojsADYCiWq9AqbLqsUTzCDSpA8FMgdAQp0Pyl0BOeurlq9A/viewform'

const SidebarFooter = (): ReactElement => {
  const chain = useCurrentChain()
  const hasBeamerConsent = useAppSelector((state) => hasConsentFor(state, CookieAndTermType.UPDATES))

  useEffect(() => {
    // Initialise Beamer when consent was previously given
    if (hasBeamerConsent && chain?.shortName) {
      loadBeamer(chain.shortName)
    }
  }, [hasBeamerConsent, chain?.shortName])

  return (
    <SidebarList>
      {!IS_PRODUCTION && (
        <ListItem disablePadding>
          <DebugToggle />
        </ListItem>
      )}

      <ListItem disablePadding>
        <a target="_blank" rel="noopener noreferrer" href={HELP_CENTER_URL} style={{ width: '100%' }}>
          <SidebarListItemButton>
            <SidebarListItemIcon color="primary">
              <HelpCenterIcon />
            </SidebarListItemIcon>
            <SidebarListItemText data-testid="list-item-need-help" bold>
              Need help?
            </SidebarListItemText>
          </SidebarListItemButton>
        </a>
      </ListItem>
      <ListItem disablePadding>
        <a target="_blank" rel="noopener noreferrer" href={NEW_SUGGESTION_FORM} style={{ width: '100%' }}>
          <SidebarListItemButton style={{ backgroundColor: '#12d0ff', color: 'black' }}>
            <SidebarListItemIcon color="primary">
              <SuggestionIcon />
            </SidebarListItemIcon>
            <SidebarListItemText bold>New Features Suggestion?</SidebarListItemText>
          </SidebarListItemButton>
        </a>
      </ListItem>
      <SidebarListItemText sx={{ marginLeft: 2 }}>
        <Typography variant="caption">
          Supported by{' '}
          <SvgIcon
            component={ProtofireLogo}
            inheritViewBox
            fontSize="small"
            sx={{ verticalAlign: 'middle', mx: 0.5 }}
          />
          <Link href="https://protofire.io" sx={{ color: darkPalette.primary.main, textDecoration: 'none' }}>
            Protofire
          </Link>
        </Typography>
      </SidebarListItemText>
    </SidebarList>
  )
}

export default SidebarFooter
