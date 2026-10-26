
## v1.10.9
*16 Oct 2026*

- An on-page notice when Cloudflare blocks a page because User Agent or Language spoofing is on. Available in all seven interface languages.
- WebGL pixel read-back returned garbage instead of the rendered frame, which broke maps, editors and games. Real pixels now come back with imperceptible noise over them.
- Querying UNPACK_FLIP_Y_WEBGL or UNPACK_PREMULTIPLY_ALPHA_WEBGL returned a GPU string instead of a value, which broke texture uploads.
- getParameter answered null for everything except the four identity parameters.
- getContextAttributes always reported false context parameters.
- Scripts that read the GPU through a numeric constant received the real card instead of the spoofed one.
- Workers reported the real Intl and locale.
- navigator getters returned a value instead of throwing on a foreign this.
- navigator.languages was not frozen and was built in the wrong realm.
- Intl.*.prototype.constructor still pointed at the original object.
- A duplicate language patch in the background script exposed the source of the replaced getters.
- Every GPU capability limit (WebGL 1 and 2, about thirty parameters) now matches the claimed system: Windows through D3D11, macOS through Metal.
- The WebGL extension list matches the claimed system and browser pair.
- The GPU model is chosen to fit the reported thread count.

## v1.10.0
*3 Sep 2026*

- Improved spoofing inside nested frames: canvas, element geometry, language, and screen values are now consistent across every window on a page, including isolated iframes.
- Spoofed values now arrive with the server response and take effect before the page's first script runs.
- CPU thread count now rotates between sessions and differs from site to site.
- Expanded Client Hints support: the full set of headers is sent, Windows versions follow the spec, and browsers older than Chromium 89 correctly send none.
- CSS system fonts and screen geometry now follow the selected operating system, so macOS profiles get a menu bar and overlay scrollbars.
- Refined screen resolution spoofing: media queries are evaluated on the browser's own object and resize events work again, so responsive layouts render more accurately.
- Updated WebGL, WebGPU, font, voice, and audio masking.
- Added a separate toggle for blocking third-party cookies, and renamed the existing one to "Block Ads and Trackers" for clarity.
- Added a warning when an outdated User-Agent is entered, explaining why such a string works against you.
- Clarified the whitelist description: what it turns off on those sites, and what keeps running.
- Time zones are now labeled with their exact IANA identifiers, which makes them easy to verify against testing sites.
- Reviewed and polished all seven translations.
- Firefox: the extension now points out the site access permission the browser asks users to grant, and requests it with a single click.
- Removed the Opera presets, because that profile is recognizable to sites and makes you easier to single out. The string can still be entered manually, and the extension explains the trade-off.

## v1.9.3
*1 Sep 2026*

- Fixed User-Agent Client Hints leaking the real browser version behind a spoofed User-Agent.The full set of hints now matches the selected profile, and is removed for Firefox and Safari profiles, which do not support them.
- Updated all browser profiles to current versions: Chrome and Brave 152, Edge 152, Opera 136, Vivaldi 8.1, Firefox 154, Safari 26.
- Fixed navigator.platform and navigator.appVersion not matching the selected profile, and added correct oscpu and buildID handling for Firefox profiles.
- Fixed timezone being replaced while timezone spoofing was off, a wrong UTC offset sign, and daylight saving time being ignored.
- Custom User-Agent input no longer accepts mobile strings, because the extension spoofs desktop profiles only.

## v1.9.2
*31 Aug 2026*

- Fixed sign-in and sign-up failing on sites with a strict Content Security Policy (Tutanota and others) while User-Agent protection was enabled.
- Client Hints headers now match the spoofed User-Agent instead of being removed, which made the browser look inconsistent to websites.
- The popup now reports when a site's security policy blocks User-Agent protection inside that site's workers.
- The whitelist is now a single editable list, so you can paste or edit every site at once instead of adding them one at a time.
- Added a Copy button that copies the whole whitelist, so you can move it to another browser or a fresh install.
- Saving the whitelist now reports what changed: how many sites were added, which were already there, which were redundant because a parent domain already covers them, and which weren't recognized.

