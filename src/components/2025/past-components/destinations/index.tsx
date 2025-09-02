"use client";

import Image from "next/image";
import styles from "./todo-done.module.css";
import React from "react";

const ICONS = {
  map: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABkElEQVR4nO3aoU7lUBDG8R9mCZhNMHANPAASS4LBrtkHwECwJBgsDiwSiyQokPsOG4KAZ9gsCWh2STcklQ33tr2Xbcv3T0Y105x+nWnPmRlCCCFMhRGO8RsFnnCOTQNnAxf4Uz54ld3jCCsGwjx2cPvOQ1fZX/wofRcMIMyLFtarFNnC1ZgwL8qI2Gsgxh0OsayHYf6KG2xjrvRtGhWdSZETPI5Z7Nv1U6xW+BcdtYkp3rEHHGCxoX8vBXitCHOfSYDVOs5DFKAuH7rYGuuYvWNJBJAIkBSQb4B8BOUvIL9B2QfIRkh2grIVlrOAHIbkNCjHYakHSEFEKkJSEpOaoBRFpSosZXHpC0hjRDpD0hqT3qBeN0dHUxyg6pUAGxPMCQ5OgPmGc4K9F2A05TDvjQBbNecEv+I7rlukRqcEKMbM9l2VIlWxXA5B3tW875euC/CMM6zVuO96OVv46wNSqFVUFS3nBMfx9na/4RIvQ5wTrMMS9vGziwI8NwjzNsw6RSbmFrv/e2A5hBBCCMEM+QdbxD00mzW51wAAAABJRU5ErkJggg==",
  panda: "data:image/png;base64,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",
  iced_coffee: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAADxklEQVR4nO2aW0gUURjH/9A9CqSneogKJKglu+qq6a70IORGurNsJUVJpmZlQuyaPQSZGWnllkWulWVRQVvNZBpBTz3UW3d6iXqIijCK7CIpXvriuI6z6u7m7rYzZ2t+8H858zHn+3Fm9swMC+jo6OjohEAZJcNBbXAShZF9iCkcZIOTfoYpG2PCTiqFg/oikCVseXkKMYGDGoY0XtL+HvGrSwHkhpgF4J4SmgAn9Q7Kbn33AtPm5YchGyPCZWQYlC3t+IRxUzcAsACYglhn1S2anCNStiDSOUGih4JEH4xnlft2ehX9yvZ0fRbEvkdWiRpZrd1DkxCLolaJdgsitQsSkW8MJ5V7N9419BiLVaIfgkiH7B6KjRW33SSjINLb4SJyZtUowovd/mv6I9LbHJGSwDM2kXKtEnUGlJCIplUowulNQYS9q93JzgkesYmUKYjUE0yAZfweRTjravDaAeleQaIs8ESOSHOtEn39U/OWa4rs2PL+y/aPwgOXd7u9meLBC4JEraNp3HxREY6rGKWsIt0MHhBukmm0TS9xK8Iza0IUlohyRErTRlIKvdloRBeOFgIHq6uvcDQR/rcVxsDrWZzlVA9WXSE10z+n8nqorvCMldUdagvPyKru0EK4n4TClucRfaIJIwkFLc+gFcb8y61qCxs3X27RTNiU1+BSW9i0yV2rmXBdoe0AOUFq5niRtVIz4do8+wq1hV35tgzNhD2wj+l0TlRNtss5gdic0JJvO9GtljCbC1rTVox2tYTbtuGL1r54U4BXagmzubT2xXYD3IXzQWpkmwH1WvtixwI41RIuSYBDa1+cMSPjbAZIjTRmwKy1L06nY06wJu+s9+ZvCJ83Y7bWvmhYinFnzOgLJNvbBOq9ALq7MTJZNgebCzzgNuFjIFm65E2k0vUmfAQvnEjD02CywaRv54Ie7xoZNu5bV5eGJ+AFVypa5cYuZoK6GkfKymHHWI1cz+T81bFxX+HaVGj3Wjicwylw+zZ3fQ2o+/xIiZ4m0I11Q0Xu7fAvzMZ962pSONiDZQ4mYY/cWIMZVGwAuSxDpZnsidXeY6wmVOEqI8rBC5XLsNa3uaOpoKL5irQsy8aOpIS3wvsTsQa8sHcZEof/qsrSxyze+JMNRXjvEiwFL5QuRJy/rUSWDiTL0mQFtRSNDBv3rWNzgCfqTfgeSJol0P66L9H/czMb99mDv4M3ji3H60iepIKFnRu8UZ2MB9ESrjbiPnijIhHXoiW8PwkecEhymH8fHE2M4JBFURRm59bR0dHRwb/Ob0+u4Ubg75W6AAAAAElFTkSuQmCC",
  beach: "data:image/png;base64,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",
  diamond: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEwklEQVR4nO2YXUxTZxjHHz46sLQa3ZJR95UlC8kudrHsahdLzIa0U7JlF2TJws0+ruRi2RzG7YYsIJMsRpgshH3EU5hmQjYVHTcVZcBEJigUyFJEQXqKFCgU6QDbnv6X92ihnNNz2mKBkvWf/JM37zlN/r9znufpm0OUVFJJ/T9VChRR1SRUfdLTLjrCfdnFfQc2OnxuGeBTDVbjGqaz8Ihma5V7DcVW3+4vrLkbEr4cyCkFZsoA5fAnpjx0Vhimc4BotmZ7SgCHrMguts7sPtybs67hvwF2lgI2Fl4VoNHXvhw+aLanAmB4CGF7/rB157qELwHSywBLMLwiAKt5afigFfrB8AhAhDhktVDJlfS4A5QC34eGDwsQrHslAIV+MIQAiC62Vsc7fJE0vAxAWveKEPJ+MEgBxHKK02QKTpyIAOHqXsmSfjCEAYjLZAqdOKoAanUfRT8YwgE87mSSThxFgEh1H0U/GBQA1jyZghPnKIAzfgE9D3yi2fpoKIC07s8DZAGoE6A+gG4DNArQIEBdALUA1CTvB0Mw7JcD2HGMh+bUgmi2ZnsxTybOLzRYvH4ML3oxKjHbY9dqhACoyddFrQB1A2QDiAfIEcHsniGAbgDUDlCz7/pTX9+CttaFlN8E2Ztie+zarvLRM1ED7HEKTeVuPwYX5ABsj117ZSIAanSPUIMbdPlfkNULsgciA9gBGvCB/lwAnbsP+mnqjrbwIjTlNqQ0euUAjV7xWuYnl85HX0MOaIlHf9Y48MG0gAsen2i2ZnvLYbqXWiWjFPTLLKh5HtS1BBoWHpqt2R67xu4J+Y3mYE+r3mgGsy7/NDI/60Taj9Oi2Zrt6Y1cvyG/VksxiUcO8ZiLUA736DunEPFUqminoHu3YTwIEM46IzevyzW/HFv4FYj3I5ZEo/vmWgFSvrXfVAsv2sQVri38CsQPqgD9vra1AjxR9FeH+tM3n6DH1ggyiUePCsQcVU8txAxQObmYlX96TjF8nvlvMlVlUFw0hpfIAbcixMX5zpjL58jINZUnP7tjb92LFFfxKFAEGPJfixUg4+OW6+EBuIDOxL1H6yIHqhUgHlDNtCv68nHO6t+u94YFyOMqaN00hAzi0R0WosUTdTOnlvwTtnl1eeZOeq1WQ+uqcbxADrhkALf9vdECbCtsHghTOs5t+7lnaEPEI594BCR/agH62WWPCHB8wqE3cYHVZWMWtu/l8jYm/ArEcdlbuLp0JRJA2lf9bfLS4Upow9UNDfHoWAUwJqh+/2HWFvw+KgG4TAUNabQp4vEc8ZhaBVE3Y1Oc/cfGbZLSuafddzKbNlV27FvVDz2SE2qINZ93h0wfzqcz1r9BCSEeFSvNLExQldMvB3AKWe/86gp5A8WUMALSiUfbMkSD+4asfCrGekOOyBeIkEIJJTueJR6TIsCg/DNixoGOrkfh7+rfMj9JCSk73iQefrLj/qoTauXkom7/qUW90cyOD69TQsuBMvEt/DF/dfnocOSO+PSzjHVFlPACUskBC91aOaFmfmTp0+eZo/+qsOmawNNkx13xhFo5Masz1dt2meq305aSHXvokqc1tWSoTWsyv0pbUu1Ln2oO9nxIW1ZAKiHR5n1SSSVFiaT/AFVXmEpC0QRsAAAAAElFTkSuQmCC",
}

export const TodoDoneEffect = () => {
  const [isDestinationHover, setIsDestinationHover] = React.useState(false);
  const [isIconHover, setIsIconHover] = React.useState(false);

  return (
    <div className={styles.destination_container}>
      <Image
        src={ICONS.map}
        width={40}
        height={40}
        alt=""
      />
      <span
        className={`
          ${styles.destination_media_100}
          ${styles.destination_media}
          ${isDestinationHover ? styles.dest_hover : styles.hide}
        `}
      />
      <span
        className={`
          ${styles.destination_media_200}
          ${styles.destination_media}
          ${isDestinationHover ? styles.dest_hover : styles.hide}
        `}
      />
      <span
        className={`
          ${styles.destination_media_300}
          ${styles.destination_media}
          ${isDestinationHover ? styles.dest_hover : styles.hide}
        `}
      />
      <span
        className={`
          ${styles.destination_media_400}
          ${styles.destination_media}
          ${isDestinationHover ? styles.dest_hover : styles.hide}
        `}
      />
      <p className={styles.destination_content_container}>
        Explore <span className={`${styles.content} ${styles.dest_focus}`} onMouseOver={() => setIsDestinationHover(!isDestinationHover)} onMouseOut={() => setIsDestinationHover(!isDestinationHover)}>Uncharted Destinations</span> and <span className={`${styles.content} ${styles.gem_focus}`} onMouseOver={() => setIsIconHover(!isIconHover)} onMouseOut={() => setIsIconHover(!isIconHover)}>Local Gems</span>
      



        <Image
        src={ICONS.panda}
        width={40}
        height={40}
        alt=""
        className={`
          ${styles.destination_icon_panda}
          ${styles.icons} ${isIconHover ? styles.gem_hover : styles.hide}
        `}
      />
      <Image
        src={ICONS.beach}
        width={40}
        height={40}
        alt=""
        className={`
          ${styles.destination_icon_beach}
          ${styles.icons} ${isIconHover ? styles.gem_hover : styles.hide}
        `}
      />
      <Image
        src={ICONS.iced_coffee}
        width={40}
        height={40}
        alt=""
        className={`
          ${styles.destination_icon_coffee}
          ${styles.icons}
          ${isIconHover ? styles.gem_hover : styles.hide}
        `}
      />
      <Image
        src={ICONS.diamond}
        width={40}
        height={40}
        alt=""
        className={`
          ${styles.destination_icon_diamond}
          ${styles.icons}
          ${isIconHover ? styles.gem_hover : styles.hide}
        `}
      />



      </p>
      
    </div>
  )
}
