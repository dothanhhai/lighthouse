/**
 * @license Copyright 2023 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * @fileoverview Ensures ARIA attributes are appropriate for an element's role.
 * See base class in axe-audit.js for audit() implementation.
 */

import AxeAudit from './axe-audit.js';
import * as i18n from '../../lib/i18n/i18n.js';

const UIStrings = {
  /** Title of an accesibility audit that evaluates if the ARIA role attributes are valid for the HTML element. This title is descriptive of the successful state and is shown to users when no user action is required. */
  title: 'Values assigned to `role=""` are valid ARIA roles.',
  /** Title of an accesibility audit that evaluates if the ARIA role attributes are valid for the HTML element. This title is descriptive of the failing state and is shown to users when there is a failure that needs to be addressed. */
  failureTitle: 'Values assigned to `role=""` are not valid ARIA roles.',
  /** Description of a Lighthouse audit that tells the user *why* they should try to pass. This is displayed after a user expands the section to see more. No character length limits. The last sentence starting with 'Learn' becomes link text to additional documentation. */
  description: 'ARIA `role`s enable assistive technologies to know the role of each element on ' +
      'the web page. If the `role` values are misspelled, not existing ARIA `role` values, or ' +
      'abstract roles, then the purpose of the element will not be communicated to users of ' +
      'assistive technologies. ' +
      '[Learn more about ARIA roles](https://dequeuniversity.com/rules/axe/4.8/aria-allowed-roles).',
};

const str_ = i18n.createIcuMessageFn(import.meta.url, UIStrings);

class ARIAAllowedRole extends AxeAudit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'aria-allowed-role',
      title: str_(UIStrings.title),
      failureTitle: str_(UIStrings.failureTitle),
      description: str_(UIStrings.description),
      requiredArtifacts: ['Accessibility'],
    };
  }
}

export default ARIAAllowedRole;
export {UIStrings};