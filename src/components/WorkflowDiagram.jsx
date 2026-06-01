import { useState } from "react";
import { ChevronRight, FileCheck2, ShieldAlert } from "lucide-react";

export default function WorkflowDiagram({ nodes }) {
  const [selectedId, setSelectedId] = useState(nodes[0]?.id);
  const selected = nodes.find((node) => node.id === selectedId) || nodes[0];

  if (!selected) return null;

  return (
    <div className="workflow-diagram">
      <div className="workflow-diagram__rail" aria-label="Clickable workflow stages">
        {nodes.map((node, index) => (
          <div className="workflow-diagram__step" key={node.id}>
            <button
              className={`workflow-node ${node.id === selected.id ? "is-active" : ""}`}
              type="button"
              onClick={() => setSelectedId(node.id)}
              aria-pressed={node.id === selected.id}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {node.label}
            </button>
            {index < nodes.length - 1 && <ChevronRight aria-hidden="true" size={16} />}
          </div>
        ))}
      </div>

      <div className="workflow-diagram__details">
        <div>
          <p className="eyebrow">Selected workflow stage</p>
          <h4>{selected.label}</h4>
        </div>
        <div className="workflow-detail-grid">
          <article>
            <h5>What to ask</h5>
            <p>{selected.whatToAsk}</p>
          </article>
          <article>
            <h5>Documents</h5>
            <p>{selected.documents}</p>
          </article>
          <article>
            <h5>Quality check</h5>
            <p>{selected.whatToCheck}</p>
          </article>
          <article className="workflow-detail-grid__warning">
            <ShieldAlert aria-hidden="true" size={18} />
            <div>
              <h5>Do not promise</h5>
              <p>{selected.notPromise}</p>
            </div>
          </article>
          <article className="workflow-detail-grid__escalation">
            <FileCheck2 aria-hidden="true" size={18} />
            <div>
              <h5>Escalate when</h5>
              <p>{selected.escalateWhen}</p>
            </div>
          </article>
        </div>
        <div className="sample-note">
          <strong>Sample issue-log line</strong>
          <p>{selected.sampleNote}</p>
        </div>
      </div>
    </div>
  );
}
