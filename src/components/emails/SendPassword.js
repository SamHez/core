import * as React from 'react';


export function Email(props) {
  const { url } = props;
  return (
    <>
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <title>Welcome To Core Uganda</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n      /**\n   * Google webfonts. Recommended to include the .woff version for cross-client compatibility.\n   */\n      @media screen {\n        @font-face {\n          font-family: 'Source Sans Pro';\n          font-style: normal;\n          font-weight: 400;\n          src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');\n        }\n\n        @font-face {\n          font-family: 'Source Sans Pro';\n          font-style: normal;\n          font-weight: 700;\n          src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');\n        }\n      }\n\n      /**\n   * Avoid browser level font resizing.\n   * 1. Windows Mobile\n   * 2. iOS / OSX\n   */\n      body,\n      table,\n      td,\n      a {\n        -ms-text-size-adjust: 100%;\n        /* 1 */\n        -webkit-text-size-adjust: 100%;\n        /* 2 */\n      }\n\n      /**\n   * Remove extra space added to tables and cells in Outlook.\n   */\n      table,\n      td {\n        mso-table-rspace: 0pt;\n        mso-table-lspace: 0pt;\n      }\n\n      /**\n   * Better fluid images in Internet Explorer.\n   */\n      img {\n        -ms-interpolation-mode: bicubic;\n      }\n\n      /**\n   * Remove blue links for iOS devices.\n   */\n      a[x-apple-data-detectors] {\n        font-family: inherit !important;\n        font-size: inherit !important;\n        font-weight: inherit !important;\n        line-height: inherit !important;\n        color: inherit !important;\n        text-decoration: none !important;\n      }\n\n      /**\n   * Fix centering issues in Android 4.4.\n   */\n      div[style*=\"margin: 16px 0;\"] {\n        margin: 0 !important;\n      }\n\n      body {\n        width: 100% !important;\n        height: 100% !important;\n        padding: 0 !important;\n        margin: 0 !important;\n      }\n\n      /**\n   * Collapse table borders to avoid space between cells.\n   */\n      table {\n        border-collapse: collapse !important;\n      }\n\n      a {\n        color: #1a82e2;\n      }\n\n      img {\n        height: auto;\n        line-height: 100%;\n        text-decoration: none;\n        border: 0;\n        outline: none;\n      }\n    "
    }}
  />
  {/* start preheader */}
  <div
    className="preheader"
    style={{
      display: "none",
      maxWidth: 0,
      maxHeight: 0,
      overflow: "hidden",
      fontSize: 1,
      lineHeight: 1,
      color: "#fff",
      opacity: 0
    }}
  >
    {" "}
    A preheader is the short summary text that follows the subject line when an
    email is viewed in the inbox.{" "}
  </div>
  {/* end preheader */}
  {/* start body */}
  <table border={0} cellPadding={0} cellSpacing={0} width="100%">
    {/* start logo */}
    <tbody>
      <tr>
        <td align="center" bgcolor="#e9ecef">
          {/*[if (gte mso 9)|(IE)]>
								<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
									<tr>
										<td align="center" valign="top" width="600">
											<![endif]*/}
          <table
            border={0}
            cellPadding={0}
            cellSpacing={0}
            width="100%"
            style={{ maxWidth: 600 }}
          >
            <tbody>
              <tr>
                <td
                  align="center"
                  valign="top"
                  style={{ padding: "36px 24px" }}
                >
                  <a
                    href="https://sendgrid.com"
                    target="_blank"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      src="https://core.ug/client-login/images/core-logo.png"
                      alt="Logo"
                      border={0}
                      width="100%;"
                      style={{
                        display: "block",
                        width: "100%",
                        maxWidth: 100,
                        minWidth: 100
                      }}
                    />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          {/*[if (gte mso 9)|(IE)]>
											</td>
										</tr>
									</table>
									<![endif]*/}
        </td>
      </tr>
      {/* end logo */}
      {/* start hero */}
      <tr>
        <td align="center" bgcolor="#e9ecef">
          {/*[if (gte mso 9)|(IE)]>
									<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
										<tr>
											<td align="center" valign="top" width="600">
												<![endif]*/}
          <table
            border={0}
            cellPadding={0}
            cellSpacing={0}
            width="100%"
            style={{ maxWidth: 600 }}
          >
            <tbody>
              <tr>
                <td
                  align="left"
                  bgcolor="#ffffff"
                  style={{
                    padding: "36px 24px 0",
                    fontFamily:
                      '"Source Sans Pro", Helvetica, Arial, sans-serif',
                    borderTop: "3px solid #d4dadf"
                  }}
                >
                  <h1
                    style={{
                      margin: 0,
                      fontSize: 32,
                      fontWeight: 700,
                      letterSpacing: "-1px",
                      lineHeight: 48,
                      color: "green"
                    }}
                  >
                    Below Are Your Login Credentials
                  </h1>
                </td>
              </tr>
            </tbody>
          </table>
          {/*[if (gte mso 9)|(IE)]>
											</td>
										</tr>
									</table>
									<![endif]*/}
        </td>
      </tr>
      {/* end hero */}
      {/* start copy block */}
      <tr>
        <td align="center" bgcolor="#e9ecef">
          {/*[if (gte mso 9)|(IE)]>
									<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
										<tr>
											<td align="center" valign="top" width="600">
												<![endif]*/}
          <table
            border={0}
            cellPadding={0}
            cellSpacing={0}
            width="100%"
            style={{ maxWidth: 600 }}
          >
            {/* start copy */}
            <tbody>
              <tr>
                <td
                  align="left"
                  bgcolor="#ffffff"
                  style={{
                    padding: 24,
                    fontFamily:
                      '"Source Sans Pro", Helvetica, Arial, sans-serif',
                    fontSize: 16,
                    lineHeight: 24
                  }}
                >
                  <p style={{ margin: 0 }}>
                    Tap the button below to account the login page . If you
                    didn't request a new password, you can safely request to
                    delete this email account.
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  align="left"
                  bgcolor="#ffffff"
                  style={{
                    padding: 24,
                    fontFamily:
                      '"Source Sans Pro", Helvetica, Arial, sans-serif',
                    fontSize: 16,
                    lineHeight: 24
                  }}
                >
                  <p style={{ margin: 0 }}>
                    <strong>Username: </strong>
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>Password:</strong>
                  </p>
                </td>
              </tr>
              {/* end copy */}
              {/* start button */}
              <tr>
                <td align="left" bgcolor="#ffffff">
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="center"
                          bgcolor="#ffffff"
                          style={{ padding: 12 }}
                        >
                          <table border={0} cellPadding={0} cellSpacing={0}>
                            <tbody>
                              <tr>
                                <td
                                  align="center"
                                  bgcolor="#1a82e2"
                                  style={{ borderRadius: 6 }}
                                >
                                  <a
                                    href="https://app.core.ug"
                                    target="_blank"
                                    style={{
                                      display: "inline-block",
                                      padding: "16px 36px",
                                      fontFamily:
                                        '"Source Sans Pro", Helvetica, Arial, sans-serif',
                                      fontSize: 36,
                                      color: "#ffffff",
                                      textDecoration: "none",
                                      borderRadius: 6,
                                      backgroundColor: "green"
                                    }}
                                  >
                                    Click To Login
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              {/* end button */}
              {/* start copy */}
              <tr>
                <td
                  align="left"
                  bgcolor="#ffffff"
                  style={{
                    padding: 24,
                    fontFamily:
                      '"Source Sans Pro", Helvetica, Arial, sans-serif',
                    fontSize: 16,
                    lineHeight: 24
                  }}
                >
                  <p style={{ margin: 0 }}>
                    If that doesn't work, copy and paste the following link in
                    your browser:
                  </p>
                  <p style={{ margin: 0 }}>
                    <a href="https://bit.ly/3LrSvAm" target="_blank">
                      https://bit.ly/3LrSvAm
                    </a>
                  </p>
                </td>
              </tr>
              {/* end copy */}
              {/* start copy */}
              <tr>
                <td
                  align="left"
                  bgcolor="#ffffff"
                  style={{
                    padding: 24,
                    fontFamily:
                      '"Source Sans Pro", Helvetica, Arial, sans-serif',
                    fontSize: 16,
                    lineHeight: 24,
                    borderBottom: "3px solid #d4dadf"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    Cheers, <br />
                  </p>
                </td>
              </tr>
              {/* end copy */}
            </tbody>
          </table>
          {/*[if (gte mso 9)|(IE)]>
												</td>
											</tr>
										</table>
										<![endif]*/}
        </td>
      </tr>
      {/* end copy block */}
      {/* start footer */}
      <tr>
        <td align="center" bgcolor="#e9ecef" style={{ padding: 24 }}>
          {/*[if (gte mso 9)|(IE)]>
										<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
											<tr>
												<td align="center" valign="top" width="600">
													<![endif]*/}
          <table
            border={0}
            cellPadding={0}
            cellSpacing={0}
            width="100%"
            style={{ maxWidth: 600 }}
          >
            {/* start permission */}
            <tbody>
              <tr>
                <td
                  align="center"
                  bgcolor="#e9ecef"
                  style={{
                    padding: "12px 24px",
                    fontFamily:
                      '"Source Sans Pro", Helvetica, Arial, sans-serif',
                    fontSize: 14,
                    lineHeight: 20,
                    color: "#666"
                  }}
                >
                  <p style={{ margin: 0 }}>
                    contact support at{" "}
                    <a href="mail:support@core.ug">support@core.ug</a>
                  </p>
                </td>
              </tr>
              {/* end permission */}
              {/* start unsubscribe */}
              {/* end unsubscribe */}
            </tbody>
          </table>
          {/*[if (gte mso 9)|(IE)]>
												</td>
											</tr>
										</table>
										<![endif]*/}
        </td>
      </tr>
      {/* end footer */}
    </tbody>
  </table>
  {/* end body */}
</>

  );
}