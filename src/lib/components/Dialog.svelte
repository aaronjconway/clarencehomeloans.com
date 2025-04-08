<script lang="ts">
    let dialog: HTMLDialogElement

    async function handleReadMore() {
        dialog.open ? dialog.close() : dialog.showModal()
    }
</script>

<button class="link" onclick={handleReadMore}>Privacy Policy</button>
<dialog bind:this={dialog}>
    <div class="inner-dialog">
        <h2>Your data is very important to us</h2>

        <p>
            We recognize our customers’ need and desire to preserve their
            privacy and confidentiality. Safeguarding our customers’ privacy is
            a top priority. We have adopted standards that help maintain and
            preserve the confidentiality of customers’ nonpublic personal
            information.
        </p>

        ### How we protect your information Any data that must be stored for
        compliance or so that we may contact you later, such as phone numbers,
        is only accessible with multi-factor authentication. Your information is
        very secure. ### Information we collect We gather nonpublic personal
        information about our customers as may be necessary to conduct business
        with our customers. We collect nonpublic personal information about you
        from the following sources: - Information we receive from you on
        applications or other forms, over the telephone or in face-to-face
        meetings, and via the Internet. Examples of information we receive from
        you include - Your name, address, telephone number, social security
        number, credit history and other financial information. - Information
        about your transactions with us or others. Examples of information
        relating to your transactions include payment histories, account
        balances and account activity. - Information we receive from a consumer
        reporting agency. Examples of information from consumer reporting
        agencies include your credit score, credit reports and other information
        relating to your creditworthiness from employers and others to verify
        information you have given to us. Examples of information provided by
        employers and others include verification of employment, income or
        deposits. ### Information we disclose Your personal information will
        only be retained for the purpose of providing you with our response to
        your query and **will not be made available to any third party** except
        as required and necessary to be disclosed to any related entity for the
        purpose intended or as required to be disclosed under law. - By
        submitting data on our website, the visitor is providing explicit
        consent to transmission of data collected on the website. - We treat
        data as confidential within our firm and require a strict adherence of
        all our employees to data protection and our confidentiality policies. -
        All visitors, however, should be aware that our website may contain
        links to other sites that are not governed by this or any other privacy
        statement. - We reserve the right to amend (that is, add to, delete or
        change) the terms of this Privacy Statement from time to time.
        <form method="dialog">
            <button>close</button>
        </form>
    </div>
</dialog>
