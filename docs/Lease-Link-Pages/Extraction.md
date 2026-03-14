---
sidebar_position: 9
---

# Extraction

Extraction is taking key terms from the lease to give you a quick look without having to wait on a question.

We use the term Extraction instead of the more common term Abstraction because we are extracting it directly from the lease without making alterations!

Extractions are based on documents that are uploaded. The ai searches all the documents for the tenant it is extracting. To Edit Extracted Terms, upload new documents or manually adjust them (Shown in Reviewing Terms).

## Where to Find Them

There are 3 places to view extracted terms from the lease in Lease Link:
- [Chat Page](./chatPage.md)
- [Tenant Page](./tenant.md)
- [Tenant Terms](./tenantTerms.md)

Tenant Terms contains all extracted Terms.

Tenant Page contains several important Terms.

Chat Page only has important dates!

## Reviewing Terms

We are using AI to extract these terms. The AI sometimes gets it wrong. The ai will give a confidence score on it's answer. If the confidence score is too low, it will trigger a manual review.

If a term is flagged for manual review, it will appear red!

![Docs Version Dropdown](./img/extraction1.png)

You can click on the term to check it is accurate. If the answer is correct, click approve AI Value. If it is not correct, edit the value in the text box!

![Docs Version Dropdown](./img/extraction2.png)

Click Save when you've finished editing.

**If you notice a term that isn't flagged doesn't provide the answer you want, you can still edit them using the same process.**

When editing the term you may want to review the lease in order to change the answer, the lease is already pulled up in the pop-up window for you to review!

![Docs Version Dropdown](./img/extraction3.png)

If a term is blank, and you want to add something. It will ask which lease this is coming from. This is to keep everyone accountable to not add terms not in a lease.

![Docs Version Dropdown](./img/extraction4.png)

## Lease Commencement Date
If the lease doesn't have a commencement date, because it can't find it in the lease (Or the Ai made a mistake). You can manually add it. Manually adding the commencement date will calculate the rent schedules in the lease by the commencement date. EX: Your lease says rent is $1,200 month 1-12, then $1,400 month 13-24.

When you enter a Lease Commecement date of 2/1/2026, it will return the rent schedule as 2/1/2026 - 1/31/2027 $1,200: 2/1/2027 - 1/31/2028: $1,400.

**It may take several minutes for Rent Schedules to update once the Lease Commencement Date is manually changed.*4*

## CPI Leases

If your rent increases are adjusted by CPI instead of explicitely stated, Lease Link will pull the CPI data from the Burear of Labor Statistics and calculate the current rate based on the appropriate CPI increases.